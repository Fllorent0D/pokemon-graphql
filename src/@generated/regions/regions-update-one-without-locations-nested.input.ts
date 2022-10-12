import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateWithoutLocationsInput } from './regions-create-without-locations.input';
import { Type } from 'class-transformer';
import { regionsCreateOrConnectWithoutLocationsInput } from './regions-create-or-connect-without-locations.input';
import { regionsUpsertWithoutLocationsInput } from './regions-upsert-without-locations.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { regionsUpdateWithoutLocationsInput } from './regions-update-without-locations.input';

@InputType()
export class regionsUpdateOneWithoutLocationsNestedInput {

    @Field(() => regionsCreateWithoutLocationsInput, {nullable:true})
    @Type(() => regionsCreateWithoutLocationsInput)
    create?: regionsCreateWithoutLocationsInput;

    @Field(() => regionsCreateOrConnectWithoutLocationsInput, {nullable:true})
    @Type(() => regionsCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: regionsCreateOrConnectWithoutLocationsInput;

    @Field(() => regionsUpsertWithoutLocationsInput, {nullable:true})
    @Type(() => regionsUpsertWithoutLocationsInput)
    upsert?: regionsUpsertWithoutLocationsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    @Type(() => regionsWhereUniqueInput)
    connect?: regionsWhereUniqueInput;

    @Field(() => regionsUpdateWithoutLocationsInput, {nullable:true})
    @Type(() => regionsUpdateWithoutLocationsInput)
    update?: regionsUpdateWithoutLocationsInput;
}
