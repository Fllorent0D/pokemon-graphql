import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class encounter_condition_valuesScalarWhereInput {

    @Field(() => [encounter_condition_valuesScalarWhereInput], {nullable:true})
    AND?: Array<encounter_condition_valuesScalarWhereInput>;

    @Field(() => [encounter_condition_valuesScalarWhereInput], {nullable:true})
    OR?: Array<encounter_condition_valuesScalarWhereInput>;

    @Field(() => [encounter_condition_valuesScalarWhereInput], {nullable:true})
    NOT?: Array<encounter_condition_valuesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_condition_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_default?: BoolFilter;
}
