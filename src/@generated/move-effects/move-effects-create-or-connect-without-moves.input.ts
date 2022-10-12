import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsWhereUniqueInput } from './move-effects-where-unique.input';
import { Type } from 'class-transformer';
import { move_effectsCreateWithoutMovesInput } from './move-effects-create-without-moves.input';

@InputType()
export class move_effectsCreateOrConnectWithoutMovesInput {

    @Field(() => move_effectsWhereUniqueInput, {nullable:false})
    @Type(() => move_effectsWhereUniqueInput)
    where!: move_effectsWhereUniqueInput;

    @Field(() => move_effectsCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_effectsCreateWithoutMovesInput)
    create!: move_effectsCreateWithoutMovesInput;
}
