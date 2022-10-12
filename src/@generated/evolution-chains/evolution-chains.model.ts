import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { items } from '../items/items.model';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';
import { Evolution_chainsCount } from '../prisma/evolution-chains-count.output';

@ObjectType()
export class evolution_chains {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    baby_trigger_item_id!: number | null;

    @Field(() => items, {nullable:true})
    items?: items | null;

    @Field(() => [pokemon_species], {nullable:true})
    pokemon_species?: Array<pokemon_species>;

    @Field(() => Evolution_chainsCount, {nullable:false})
    _count?: Evolution_chainsCount;
}
