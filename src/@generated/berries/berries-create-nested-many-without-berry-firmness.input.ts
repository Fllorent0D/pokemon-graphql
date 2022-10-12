import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesCreateWithoutBerry_firmnessInput } from './berries-create-without-berry-firmness.input';
import { Type } from 'class-transformer';
import { berriesCreateOrConnectWithoutBerry_firmnessInput } from './berries-create-or-connect-without-berry-firmness.input';
import { berriesWhereUniqueInput } from './berries-where-unique.input';

@InputType()
export class berriesCreateNestedManyWithoutBerry_firmnessInput {

    @Field(() => [berriesCreateWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berriesCreateWithoutBerry_firmnessInput)
    create?: Array<berriesCreateWithoutBerry_firmnessInput>;

    @Field(() => [berriesCreateOrConnectWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berriesCreateOrConnectWithoutBerry_firmnessInput)
    connectOrCreate?: Array<berriesCreateOrConnectWithoutBerry_firmnessInput>;

    @Field(() => [berriesWhereUniqueInput], {nullable:true})
    @Type(() => berriesWhereUniqueInput)
    connect?: Array<berriesWhereUniqueInput>;
}
