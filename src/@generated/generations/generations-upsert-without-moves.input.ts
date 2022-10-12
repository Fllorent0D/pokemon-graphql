import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsUpdateWithoutMovesInput } from './generations-update-without-moves.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutMovesInput } from './generations-create-without-moves.input';

@InputType()
export class generationsUpsertWithoutMovesInput {

    @Field(() => generationsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => generationsUpdateWithoutMovesInput)
    update!: generationsUpdateWithoutMovesInput;

    @Field(() => generationsCreateWithoutMovesInput, {nullable:false})
    @Type(() => generationsCreateWithoutMovesInput)
    create!: generationsCreateWithoutMovesInput;
}
