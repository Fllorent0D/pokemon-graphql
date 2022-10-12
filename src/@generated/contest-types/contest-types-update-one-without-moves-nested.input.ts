import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesCreateWithoutMovesInput } from './contest-types-create-without-moves.input';
import { Type } from 'class-transformer';
import { contest_typesCreateOrConnectWithoutMovesInput } from './contest-types-create-or-connect-without-moves.input';
import { contest_typesUpsertWithoutMovesInput } from './contest-types-upsert-without-moves.input';
import { contest_typesWhereUniqueInput } from './contest-types-where-unique.input';
import { contest_typesUpdateWithoutMovesInput } from './contest-types-update-without-moves.input';

@InputType()
export class contest_typesUpdateOneWithoutMovesNestedInput {

    @Field(() => contest_typesCreateWithoutMovesInput, {nullable:true})
    @Type(() => contest_typesCreateWithoutMovesInput)
    create?: contest_typesCreateWithoutMovesInput;

    @Field(() => contest_typesCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => contest_typesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: contest_typesCreateOrConnectWithoutMovesInput;

    @Field(() => contest_typesUpsertWithoutMovesInput, {nullable:true})
    @Type(() => contest_typesUpsertWithoutMovesInput)
    upsert?: contest_typesUpsertWithoutMovesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => contest_typesWhereUniqueInput, {nullable:true})
    @Type(() => contest_typesWhereUniqueInput)
    connect?: contest_typesWhereUniqueInput;

    @Field(() => contest_typesUpdateWithoutMovesInput, {nullable:true})
    @Type(() => contest_typesUpdateWithoutMovesInput)
    update?: contest_typesUpdateWithoutMovesInput;
}
