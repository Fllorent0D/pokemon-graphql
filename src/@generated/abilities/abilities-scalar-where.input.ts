import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class abilitiesScalarWhereInput {

    @Field(() => [abilitiesScalarWhereInput], {nullable:true})
    AND?: Array<abilitiesScalarWhereInput>;

    @Field(() => [abilitiesScalarWhereInput], {nullable:true})
    OR?: Array<abilitiesScalarWhereInput>;

    @Field(() => [abilitiesScalarWhereInput], {nullable:true})
    NOT?: Array<abilitiesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;
}
