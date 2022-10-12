import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsCreateWithoutMovesInput } from './move-effects-create-without-moves.input';
import { Type } from 'class-transformer';
import { move_effectsCreateOrConnectWithoutMovesInput } from './move-effects-create-or-connect-without-moves.input';
import { move_effectsUpsertWithoutMovesInput } from './move-effects-upsert-without-moves.input';
import { move_effectsWhereUniqueInput } from './move-effects-where-unique.input';
import { move_effectsUpdateWithoutMovesInput } from './move-effects-update-without-moves.input';

@InputType()
export class move_effectsUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => move_effectsCreateWithoutMovesInput, {nullable:true})
    @Type(() => move_effectsCreateWithoutMovesInput)
    create?: move_effectsCreateWithoutMovesInput;

    @Field(() => move_effectsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => move_effectsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: move_effectsCreateOrConnectWithoutMovesInput;

    @Field(() => move_effectsUpsertWithoutMovesInput, {nullable:true})
    @Type(() => move_effectsUpsertWithoutMovesInput)
    upsert?: move_effectsUpsertWithoutMovesInput;

    @Field(() => move_effectsWhereUniqueInput, {nullable:true})
    @Type(() => move_effectsWhereUniqueInput)
    connect?: move_effectsWhereUniqueInput;

    @Field(() => move_effectsUpdateWithoutMovesInput, {nullable:true})
    @Type(() => move_effectsUpdateWithoutMovesInput)
    update?: move_effectsUpdateWithoutMovesInput;
}
