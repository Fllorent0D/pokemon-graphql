import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_targetsCreateWithoutMovesInput } from './move-targets-create-without-moves.input';
import { Type } from 'class-transformer';
import { move_targetsCreateOrConnectWithoutMovesInput } from './move-targets-create-or-connect-without-moves.input';
import { move_targetsUpsertWithoutMovesInput } from './move-targets-upsert-without-moves.input';
import { move_targetsWhereUniqueInput } from './move-targets-where-unique.input';
import { move_targetsUpdateWithoutMovesInput } from './move-targets-update-without-moves.input';

@InputType()
export class move_targetsUpdateOneRequiredWithoutMovesNestedInput {

    @Field(() => move_targetsCreateWithoutMovesInput, {nullable:true})
    @Type(() => move_targetsCreateWithoutMovesInput)
    create?: move_targetsCreateWithoutMovesInput;

    @Field(() => move_targetsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => move_targetsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: move_targetsCreateOrConnectWithoutMovesInput;

    @Field(() => move_targetsUpsertWithoutMovesInput, {nullable:true})
    @Type(() => move_targetsUpsertWithoutMovesInput)
    upsert?: move_targetsUpsertWithoutMovesInput;

    @Field(() => move_targetsWhereUniqueInput, {nullable:true})
    @Type(() => move_targetsWhereUniqueInput)
    connect?: move_targetsWhereUniqueInput;

    @Field(() => move_targetsUpdateWithoutMovesInput, {nullable:true})
    @Type(() => move_targetsUpdateWithoutMovesInput)
    update?: move_targetsUpdateWithoutMovesInput;
}
