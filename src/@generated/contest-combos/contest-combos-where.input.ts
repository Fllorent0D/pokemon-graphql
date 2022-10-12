import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { MovesRelationFilter } from '../prisma/moves-relation-filter.input';

@InputType()
export class contest_combosWhereInput {

    @Field(() => [contest_combosWhereInput], {nullable:true})
    AND?: Array<contest_combosWhereInput>;

    @Field(() => [contest_combosWhereInput], {nullable:true})
    OR?: Array<contest_combosWhereInput>;

    @Field(() => [contest_combosWhereInput], {nullable:true})
    NOT?: Array<contest_combosWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    first_move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    second_move_id?: IntFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves_contest_combos_second_move_idTomoves?: MovesRelationFilter;

    @Field(() => MovesRelationFilter, {nullable:true})
    moves_contest_combos_first_move_idTomoves?: MovesRelationFilter;
}
