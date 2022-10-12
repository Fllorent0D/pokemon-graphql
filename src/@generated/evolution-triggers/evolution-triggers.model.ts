import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { evolution_trigger_prose } from '../evolution-trigger-prose/evolution-trigger-prose.model';
import { pokemon_evolution } from '../pokemon-evolution/pokemon-evolution.model';
import { Evolution_triggersCount } from '../prisma/evolution-triggers-count.output';

@ObjectType()
export class evolution_triggers {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [evolution_trigger_prose], {nullable:true})
    evolution_trigger_prose?: Array<evolution_trigger_prose>;

    @Field(() => [pokemon_evolution], {nullable:true})
    pokemon_evolution?: Array<pokemon_evolution>;

    @Field(() => Evolution_triggersCount, {nullable:false})
    _count?: Evolution_triggersCount;
}
