import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Encounter_conditionsRelationFilter } from '../prisma/encounter-conditions-relation-filter.input';

@InputType()
export class encounter_condition_proseWhereInput {

    @Field(() => [encounter_condition_proseWhereInput], {nullable:true})
    AND?: Array<encounter_condition_proseWhereInput>;

    @Field(() => [encounter_condition_proseWhereInput], {nullable:true})
    OR?: Array<encounter_condition_proseWhereInput>;

    @Field(() => [encounter_condition_proseWhereInput], {nullable:true})
    NOT?: Array<encounter_condition_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    encounter_condition_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Encounter_conditionsRelationFilter, {nullable:true})
    encounter_conditions?: Encounter_conditionsRelationFilter;
}
