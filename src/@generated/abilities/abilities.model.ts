import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generations } from '../generations/generations.model';
import { ability_changelog } from '../ability-changelog/ability-changelog.model';
import { ability_flavor_text } from '../ability-flavor-text/ability-flavor-text.model';
import { ability_names } from '../ability-names/ability-names.model';
import { ability_prose } from '../ability-prose/ability-prose.model';
import { pokemon_abilities } from '../pokemon-abilities/pokemon-abilities.model';
import { AbilitiesCount } from '../prisma/abilities-count.output';

@ObjectType()
export class abilities {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => generations, {nullable:false})
    generations?: generations;

    @Field(() => [ability_changelog], {nullable:true})
    ability_changelog?: Array<ability_changelog>;

    @Field(() => [ability_flavor_text], {nullable:true})
    ability_flavor_text?: Array<ability_flavor_text>;

    @Field(() => [ability_names], {nullable:true})
    ability_names?: Array<ability_names>;

    @Field(() => [ability_prose], {nullable:true})
    ability_prose?: Array<ability_prose>;

    @Field(() => [pokemon_abilities], {nullable:true})
    pokemon_abilities?: Array<pokemon_abilities>;

    @Field(() => AbilitiesCount, {nullable:false})
    _count?: AbilitiesCount;
}
