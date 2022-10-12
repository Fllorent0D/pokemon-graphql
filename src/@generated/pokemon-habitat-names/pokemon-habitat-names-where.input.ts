import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Pokemon_habitatsRelationFilter } from '../prisma/pokemon-habitats-relation-filter.input';

@InputType()
export class pokemon_habitat_namesWhereInput {

    @Field(() => [pokemon_habitat_namesWhereInput], {nullable:true})
    AND?: Array<pokemon_habitat_namesWhereInput>;

    @Field(() => [pokemon_habitat_namesWhereInput], {nullable:true})
    OR?: Array<pokemon_habitat_namesWhereInput>;

    @Field(() => [pokemon_habitat_namesWhereInput], {nullable:true})
    NOT?: Array<pokemon_habitat_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_habitat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Pokemon_habitatsRelationFilter, {nullable:true})
    pokemon_habitats?: Pokemon_habitatsRelationFilter;
}
