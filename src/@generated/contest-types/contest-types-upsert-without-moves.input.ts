import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesUpdateWithoutMovesInput } from './contest-types-update-without-moves.input';
import { Type } from 'class-transformer';
import { contest_typesCreateWithoutMovesInput } from './contest-types-create-without-moves.input';

@InputType()
export class contest_typesUpsertWithoutMovesInput {

    @Field(() => contest_typesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => contest_typesUpdateWithoutMovesInput)
    update!: contest_typesUpdateWithoutMovesInput;

    @Field(() => contest_typesCreateWithoutMovesInput, {nullable:false})
    @Type(() => contest_typesCreateWithoutMovesInput)
    create!: contest_typesCreateWithoutMovesInput;
}
