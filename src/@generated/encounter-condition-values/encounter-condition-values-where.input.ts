import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Encounter_conditionsRelationFilter } from '../prisma/encounter-conditions-relation-filter.input';
import { Encounter_condition_value_mapListRelationFilter } from '../prisma/encounter-condition-value-map-list-relation-filter.input';
import { Encounter_condition_value_proseListRelationFilter } from '../prisma/encounter-condition-value-prose-list-relation-filter.input';

@InputType()
export class encounter_condition_valuesWhereInput {

    @Field(() => [encounter_condition_valuesWhereInput], {nullable:true})
    AND?: Array<encounter_condition_valuesWhereInput>;

    @Field(() => [encounter_condition_valuesWhereInput], {nullable:true})
    OR?: Array<encounter_condition_valuesWhereInput>;

    @Field(() => [encounter_condition_valuesWhereInput], {nullable:true})
    NOT?: Array<encounter_condition_valuesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_condition_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_default?: BoolFilter;

    @Field(() => Encounter_conditionsRelationFilter, {nullable:true})
    encounter_conditions?: Encounter_conditionsRelationFilter;

    @Field(() => Encounter_condition_value_mapListRelationFilter, {nullable:true})
    encounter_condition_value_map?: Encounter_condition_value_mapListRelationFilter;

    @Field(() => Encounter_condition_value_proseListRelationFilter, {nullable:true})
    encounter_condition_value_prose?: Encounter_condition_value_proseListRelationFilter;
}
