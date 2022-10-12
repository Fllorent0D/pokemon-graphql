import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_combosFirst_move_idSecond_move_idCompoundUniqueInput } from './contest-combos-first-move-id-second-move-id-compound-unique.input';

@InputType()
export class contest_combosWhereUniqueInput {

    @Field(() => contest_combosFirst_move_idSecond_move_idCompoundUniqueInput, {nullable:true})
    first_move_id_second_move_id?: contest_combosFirst_move_idSecond_move_idCompoundUniqueInput;
}
