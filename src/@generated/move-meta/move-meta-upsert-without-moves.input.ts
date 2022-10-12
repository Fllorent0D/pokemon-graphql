import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaUpdateWithoutMovesInput } from './move-meta-update-without-moves.input';
import { Type } from 'class-transformer';
import { move_metaCreateWithoutMovesInput } from './move-meta-create-without-moves.input';

@InputType()
export class move_metaUpsertWithoutMovesInput {

    @Field(() => move_metaUpdateWithoutMovesInput, {nullable:false})
    @Type(() => move_metaUpdateWithoutMovesInput)
    update!: move_metaUpdateWithoutMovesInput;

    @Field(() => move_metaCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_metaCreateWithoutMovesInput)
    create!: move_metaCreateWithoutMovesInput;
}
