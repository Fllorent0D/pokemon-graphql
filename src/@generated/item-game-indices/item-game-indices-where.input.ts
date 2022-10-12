import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { GenerationsRelationFilter } from '../prisma/generations-relation-filter.input';
import { ItemsRelationFilter } from '../prisma/items-relation-filter.input';

@InputType()
export class item_game_indicesWhereInput {

    @Field(() => [item_game_indicesWhereInput], {nullable:true})
    AND?: Array<item_game_indicesWhereInput>;

    @Field(() => [item_game_indicesWhereInput], {nullable:true})
    OR?: Array<item_game_indicesWhereInput>;

    @Field(() => [item_game_indicesWhereInput], {nullable:true})
    NOT?: Array<item_game_indicesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => GenerationsRelationFilter, {nullable:true})
    generations?: GenerationsRelationFilter;

    @Field(() => ItemsRelationFilter, {nullable:true})
    items?: ItemsRelationFilter;
}
