import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateWithoutRegion_namesInput } from './regions-create-without-region-names.input';
import { Type } from 'class-transformer';
import { regionsCreateOrConnectWithoutRegion_namesInput } from './regions-create-or-connect-without-region-names.input';
import { regionsUpsertWithoutRegion_namesInput } from './regions-upsert-without-region-names.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { regionsUpdateWithoutRegion_namesInput } from './regions-update-without-region-names.input';

@InputType()
export class regionsUpdateOneRequiredWithoutRegion_namesNestedInput {

    @Field(() => regionsCreateWithoutRegion_namesInput, {nullable:true})
    @Type(() => regionsCreateWithoutRegion_namesInput)
    create?: regionsCreateWithoutRegion_namesInput;

    @Field(() => regionsCreateOrConnectWithoutRegion_namesInput, {nullable:true})
    @Type(() => regionsCreateOrConnectWithoutRegion_namesInput)
    connectOrCreate?: regionsCreateOrConnectWithoutRegion_namesInput;

    @Field(() => regionsUpsertWithoutRegion_namesInput, {nullable:true})
    @Type(() => regionsUpsertWithoutRegion_namesInput)
    upsert?: regionsUpsertWithoutRegion_namesInput;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    @Type(() => regionsWhereUniqueInput)
    connect?: regionsWhereUniqueInput;

    @Field(() => regionsUpdateWithoutRegion_namesInput, {nullable:true})
    @Type(() => regionsUpdateWithoutRegion_namesInput)
    update?: regionsUpdateWithoutRegion_namesInput;
}
