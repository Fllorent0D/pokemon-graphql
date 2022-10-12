import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Encounter_condition_proseListRelationFilter } from '../prisma/encounter-condition-prose-list-relation-filter.input';
import { Encounter_condition_valuesListRelationFilter } from '../prisma/encounter-condition-values-list-relation-filter.input';

@InputType()
export class encounter_conditionsWhereInput {

    @Field(() => [encounter_conditionsWhereInput], {nullable:true})
    AND?: Array<encounter_conditionsWhereInput>;

    @Field(() => [encounter_conditionsWhereInput], {nullable:true})
    OR?: Array<encounter_conditionsWhereInput>;

    @Field(() => [encounter_conditionsWhereInput], {nullable:true})
    NOT?: Array<encounter_conditionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Encounter_condition_proseListRelationFilter, {nullable:true})
    encounter_condition_prose?: Encounter_condition_proseListRelationFilter;

    @Field(() => Encounter_condition_valuesListRelationFilter, {nullable:true})
    encounter_condition_values?: Encounter_condition_valuesListRelationFilter;
}
