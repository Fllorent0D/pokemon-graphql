import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_combosFirst_move_idSecond_move_idCompoundUniqueInput } from './super-contest-combos-first-move-id-second-move-id-compound-unique.input';

@InputType()
export class super_contest_combosWhereUniqueInput {

    @Field(() => super_contest_combosFirst_move_idSecond_move_idCompoundUniqueInput, {nullable:true})
    first_move_id_second_move_id?: super_contest_combosFirst_move_idSecond_move_idCompoundUniqueInput;
}
