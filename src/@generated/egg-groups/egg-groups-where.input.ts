import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Egg_group_proseListRelationFilter } from '../prisma/egg-group-prose-list-relation-filter.input';
import { Pokemon_egg_groupsListRelationFilter } from '../prisma/pokemon-egg-groups-list-relation-filter.input';

@InputType()
export class egg_groupsWhereInput {

    @Field(() => [egg_groupsWhereInput], {nullable:true})
    AND?: Array<egg_groupsWhereInput>;

    @Field(() => [egg_groupsWhereInput], {nullable:true})
    OR?: Array<egg_groupsWhereInput>;

    @Field(() => [egg_groupsWhereInput], {nullable:true})
    NOT?: Array<egg_groupsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => Egg_group_proseListRelationFilter, {nullable:true})
    egg_group_prose?: Egg_group_proseListRelationFilter;

    @Field(() => Pokemon_egg_groupsListRelationFilter, {nullable:true})
    pokemon_egg_groups?: Pokemon_egg_groupsListRelationFilter;
}
