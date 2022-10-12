import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsUpdateWithoutMovesInput } from './move-effects-update-without-moves.input';
import { Type } from 'class-transformer';
import { move_effectsCreateWithoutMovesInput } from './move-effects-create-without-moves.input';

@InputType()
export class move_effectsUpsertWithoutMovesInput {

    @Field(() => move_effectsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => move_effectsUpdateWithoutMovesInput)
    update!: move_effectsUpdateWithoutMovesInput;

    @Field(() => move_effectsCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_effectsCreateWithoutMovesInput)
    create!: move_effectsCreateWithoutMovesInput;
}
