import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { egg_group_prose } from '../egg-group-prose/egg-group-prose.model';
import { pokemon_egg_groups } from '../pokemon-egg-groups/pokemon-egg-groups.model';
import { Egg_groupsCount } from '../prisma/egg-groups-count.output';

@ObjectType()
export class egg_groups {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [egg_group_prose], {nullable:true})
    egg_group_prose?: Array<egg_group_prose>;

    @Field(() => [pokemon_egg_groups], {nullable:true})
    pokemon_egg_groups?: Array<pokemon_egg_groups>;

    @Field(() => Egg_groupsCount, {nullable:false})
    _count?: Egg_groupsCount;
}
