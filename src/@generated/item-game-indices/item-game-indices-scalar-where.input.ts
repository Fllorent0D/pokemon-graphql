import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class item_game_indicesScalarWhereInput {

    @Field(() => [item_game_indicesScalarWhereInput], {nullable:true})
    AND?: Array<item_game_indicesScalarWhereInput>;

    @Field(() => [item_game_indicesScalarWhereInput], {nullable:true})
    OR?: Array<item_game_indicesScalarWhereInput>;

    @Field(() => [item_game_indicesScalarWhereInput], {nullable:true})
    NOT?: Array<item_game_indicesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;
}
