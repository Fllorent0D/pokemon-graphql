import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_targetsUpdateWithoutMovesInput } from './move-targets-update-without-moves.input';
import { Type } from 'class-transformer';
import { move_targetsCreateWithoutMovesInput } from './move-targets-create-without-moves.input';

@InputType()
export class move_targetsUpsertWithoutMovesInput {

    @Field(() => move_targetsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => move_targetsUpdateWithoutMovesInput)
    update!: move_targetsUpdateWithoutMovesInput;

    @Field(() => move_targetsCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_targetsCreateWithoutMovesInput)
    create!: move_targetsCreateWithoutMovesInput;
}
