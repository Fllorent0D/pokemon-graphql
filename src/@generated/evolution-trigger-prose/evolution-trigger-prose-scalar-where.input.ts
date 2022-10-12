import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class evolution_trigger_proseScalarWhereInput {

    @Field(() => [evolution_trigger_proseScalarWhereInput], {nullable:true})
    AND?: Array<evolution_trigger_proseScalarWhereInput>;

    @Field(() => [evolution_trigger_proseScalarWhereInput], {nullable:true})
    OR?: Array<evolution_trigger_proseScalarWhereInput>;

    @Field(() => [evolution_trigger_proseScalarWhereInput], {nullable:true})
    NOT?: Array<evolution_trigger_proseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    evolution_trigger_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
