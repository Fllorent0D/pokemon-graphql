import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class evolution_chainsScalarWhereInput {

    @Field(() => [evolution_chainsScalarWhereInput], {nullable:true})
    AND?: Array<evolution_chainsScalarWhereInput>;

    @Field(() => [evolution_chainsScalarWhereInput], {nullable:true})
    OR?: Array<evolution_chainsScalarWhereInput>;

    @Field(() => [evolution_chainsScalarWhereInput], {nullable:true})
    NOT?: Array<evolution_chainsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    baby_trigger_item_id?: IntNullableFilter;
}
