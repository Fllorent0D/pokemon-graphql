import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateWithoutGenerationsInput } from './regions-create-without-generations.input';
import { Type } from 'class-transformer';
import { regionsCreateOrConnectWithoutGenerationsInput } from './regions-create-or-connect-without-generations.input';
import { regionsUpsertWithoutGenerationsInput } from './regions-upsert-without-generations.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { regionsUpdateWithoutGenerationsInput } from './regions-update-without-generations.input';

@InputType()
export class regionsUpdateOneRequiredWithoutGenerationsNestedInput {

    @Field(() => regionsCreateWithoutGenerationsInput, {nullable:true})
    @Type(() => regionsCreateWithoutGenerationsInput)
    create?: regionsCreateWithoutGenerationsInput;

    @Field(() => regionsCreateOrConnectWithoutGenerationsInput, {nullable:true})
    @Type(() => regionsCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: regionsCreateOrConnectWithoutGenerationsInput;

    @Field(() => regionsUpsertWithoutGenerationsInput, {nullable:true})
    @Type(() => regionsUpsertWithoutGenerationsInput)
    upsert?: regionsUpsertWithoutGenerationsInput;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    @Type(() => regionsWhereUniqueInput)
    connect?: regionsWhereUniqueInput;

    @Field(() => regionsUpdateWithoutGenerationsInput, {nullable:true})
    @Type(() => regionsUpdateWithoutGenerationsInput)
    update?: regionsUpdateWithoutGenerationsInput;
}
