import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { GenerationsRelationFilter } from '../prisma/generations-relation-filter.input';
import { LocationsRelationFilter } from '../prisma/locations-relation-filter.input';

@InputType()
export class location_game_indicesWhereInput {

    @Field(() => [location_game_indicesWhereInput], {nullable:true})
    AND?: Array<location_game_indicesWhereInput>;

    @Field(() => [location_game_indicesWhereInput], {nullable:true})
    OR?: Array<location_game_indicesWhereInput>;

    @Field(() => [location_game_indicesWhereInput], {nullable:true})
    NOT?: Array<location_game_indicesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => GenerationsRelationFilter, {nullable:true})
    generations?: GenerationsRelationFilter;

    @Field(() => LocationsRelationFilter, {nullable:true})
    locations?: LocationsRelationFilter;
}
