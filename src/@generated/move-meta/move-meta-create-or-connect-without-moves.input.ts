import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import { move_metaCreateWithoutMovesInput } from './move-meta-create-without-moves.input';

@InputType()
export class move_metaCreateOrConnectWithoutMovesInput {

    @Field(() => move_metaWhereUniqueInput, {nullable:false})
    @Type(() => move_metaWhereUniqueInput)
    where!: move_metaWhereUniqueInput;

    @Field(() => move_metaCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_metaCreateWithoutMovesInput)
    create!: move_metaCreateWithoutMovesInput;
}
