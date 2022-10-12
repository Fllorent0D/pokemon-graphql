import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesCreateWithoutTypesInput } from './berries-create-without-types.input';
import { Type } from 'class-transformer';
import { berriesCreateOrConnectWithoutTypesInput } from './berries-create-or-connect-without-types.input';
import { berriesWhereUniqueInput } from './berries-where-unique.input';

@InputType()
export class berriesCreateNestedManyWithoutTypesInput {

    @Field(() => [berriesCreateWithoutTypesInput], {nullable:true})
    @Type(() => berriesCreateWithoutTypesInput)
    create?: Array<berriesCreateWithoutTypesInput>;

    @Field(() => [berriesCreateOrConnectWithoutTypesInput], {nullable:true})
    @Type(() => berriesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Array<berriesCreateOrConnectWithoutTypesInput>;

    @Field(() => [berriesWhereUniqueInput], {nullable:true})
    @Type(() => berriesWhereUniqueInput)
    connect?: Array<berriesWhereUniqueInput>;
}
