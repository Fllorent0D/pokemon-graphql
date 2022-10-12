import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class pokemon_game_indicesScalarWhereInput {

    @Field(() => [pokemon_game_indicesScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_game_indicesScalarWhereInput>;

    @Field(() => [pokemon_game_indicesScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_game_indicesScalarWhereInput>;

    @Field(() => [pokemon_game_indicesScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_game_indicesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;
}
