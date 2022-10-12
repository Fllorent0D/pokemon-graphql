import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Encounter_methodsRelationFilter } from '../prisma/encounter-methods-relation-filter.input';

@InputType()
export class encounter_method_proseWhereInput {

    @Field(() => [encounter_method_proseWhereInput], {nullable:true})
    AND?: Array<encounter_method_proseWhereInput>;

    @Field(() => [encounter_method_proseWhereInput], {nullable:true})
    OR?: Array<encounter_method_proseWhereInput>;

    @Field(() => [encounter_method_proseWhereInput], {nullable:true})
    NOT?: Array<encounter_method_proseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Encounter_methodsRelationFilter, {nullable:true})
    encounter_methods?: Encounter_methodsRelationFilter;
}
