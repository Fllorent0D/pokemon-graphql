import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutMovesInput } from './types-create-without-moves.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutMovesInput } from './types-create-or-connect-without-moves.input';
import { typesUpsertWithoutMovesInput } from './types-upsert-without-moves.input';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { typesUpdateWithoutMovesInput } from './types-update-without-moves.input';

@InputType()
export class typesUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => typesCreateWithoutMovesInput, {nullable:true})
    @Type(() => typesCreateWithoutMovesInput)
    create?: typesCreateWithoutMovesInput;

    @Field(() => typesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => typesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: typesCreateOrConnectWithoutMovesInput;

    @Field(() => typesUpsertWithoutMovesInput, {nullable:true})
    @Type(() => typesUpsertWithoutMovesInput)
    upsert?: typesUpsertWithoutMovesInput;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: typesWhereUniqueInput;

    @Field(() => typesUpdateWithoutMovesInput, {nullable:true})
    @Type(() => typesUpdateWithoutMovesInput)
    update?: typesUpdateWithoutMovesInput;
}
