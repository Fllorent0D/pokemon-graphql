import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutMovesInput } from './generations-create-without-moves.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutMovesInput } from './generations-create-or-connect-without-moves.input';
import { generationsUpsertWithoutMovesInput } from './generations-upsert-without-moves.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithoutMovesInput } from './generations-update-without-moves.input';

@InputType()
export class generationsUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => generationsCreateWithoutMovesInput, {nullable:true})
    @Type(() => generationsCreateWithoutMovesInput)
    create?: generationsCreateWithoutMovesInput;

    @Field(() => generationsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutMovesInput;

    @Field(() => generationsUpsertWithoutMovesInput, {nullable:true})
    @Type(() => generationsUpsertWithoutMovesInput)
    upsert?: generationsUpsertWithoutMovesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutMovesInput, {nullable:true})
    @Type(() => generationsUpdateWithoutMovesInput)
    update?: generationsUpdateWithoutMovesInput;
}
