import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class location_game_indicesScalarWhereInput {

    @Field(() => [location_game_indicesScalarWhereInput], {nullable:true})
    AND?: Array<location_game_indicesScalarWhereInput>;

    @Field(() => [location_game_indicesScalarWhereInput], {nullable:true})
    OR?: Array<location_game_indicesScalarWhereInput>;

    @Field(() => [location_game_indicesScalarWhereInput], {nullable:true})
    NOT?: Array<location_game_indicesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;
}
