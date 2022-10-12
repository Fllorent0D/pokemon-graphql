import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { GenerationsRelationFilter } from '../prisma/generations-relation-filter.input';
import { Ability_changelogListRelationFilter } from '../prisma/ability-changelog-list-relation-filter.input';
import { Ability_flavor_textListRelationFilter } from '../prisma/ability-flavor-text-list-relation-filter.input';
import { Ability_namesListRelationFilter } from '../prisma/ability-names-list-relation-filter.input';
import { Ability_proseListRelationFilter } from '../prisma/ability-prose-list-relation-filter.input';
import { Pokemon_abilitiesListRelationFilter } from '../prisma/pokemon-abilities-list-relation-filter.input';

@InputType()
export class abilitiesWhereInput {

    @Field(() => [abilitiesWhereInput], {nullable:true})
    AND?: Array<abilitiesWhereInput>;

    @Field(() => [abilitiesWhereInput], {nullable:true})
    OR?: Array<abilitiesWhereInput>;

    @Field(() => [abilitiesWhereInput], {nullable:true})
    NOT?: Array<abilitiesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => GenerationsRelationFilter, {nullable:true})
    generations?: GenerationsRelationFilter;

    @Field(() => Ability_changelogListRelationFilter, {nullable:true})
    ability_changelog?: Ability_changelogListRelationFilter;

    @Field(() => Ability_flavor_textListRelationFilter, {nullable:true})
    ability_flavor_text?: Ability_flavor_textListRelationFilter;

    @Field(() => Ability_namesListRelationFilter, {nullable:true})
    ability_names?: Ability_namesListRelationFilter;

    @Field(() => Ability_proseListRelationFilter, {nullable:true})
    ability_prose?: Ability_proseListRelationFilter;

    @Field(() => Pokemon_abilitiesListRelationFilter, {nullable:true})
    pokemon_abilities?: Pokemon_abilitiesListRelationFilter;
}
