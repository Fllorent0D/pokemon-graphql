import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesUpdateWithoutMovesInput } from './types-update-without-moves.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutMovesInput } from './types-create-without-moves.input';

@InputType()
export class typesUpsertWithoutMovesInput {

    @Field(() => typesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => typesUpdateWithoutMovesInput)
    update!: typesUpdateWithoutMovesInput;

    @Field(() => typesCreateWithoutMovesInput, {nullable:false})
    @Type(() => typesCreateWithoutMovesInput)
    create!: typesCreateWithoutMovesInput;
}
