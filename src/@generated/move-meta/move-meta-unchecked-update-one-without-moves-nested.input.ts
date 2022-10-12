import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaCreateWithoutMovesInput } from './move-meta-create-without-moves.input';
import { Type } from 'class-transformer';
import { move_metaCreateOrConnectWithoutMovesInput } from './move-meta-create-or-connect-without-moves.input';
import { move_metaUpsertWithoutMovesInput } from './move-meta-upsert-without-moves.input';
import { move_metaWhereUniqueInput } from './move-meta-where-unique.input';
import { move_metaUpdateWithoutMovesInput } from './move-meta-update-without-moves.input';

@InputType()
export class move_metaUncheckedUpdateOneWithoutMovesNestedInput {

    @Field(() => move_metaCreateWithoutMovesInput, {nullable:true})
    @Type(() => move_metaCreateWithoutMovesInput)
    create?: move_metaCreateWithoutMovesInput;

    @Field(() => move_metaCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => move_metaCreateOrConnectWithoutMovesInput)
    connectOrCreate?: move_metaCreateOrConnectWithoutMovesInput;

    @Field(() => move_metaUpsertWithoutMovesInput, {nullable:true})
    @Type(() => move_metaUpsertWithoutMovesInput)
    upsert?: move_metaUpsertWithoutMovesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => move_metaWhereUniqueInput, {nullable:true})
    @Type(() => move_metaWhereUniqueInput)
    connect?: move_metaWhereUniqueInput;

    @Field(() => move_metaUpdateWithoutMovesInput, {nullable:true})
    @Type(() => move_metaUpdateWithoutMovesInput)
    update?: move_metaUpdateWithoutMovesInput;
}
