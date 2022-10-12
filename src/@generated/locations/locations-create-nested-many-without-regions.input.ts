import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsCreateWithoutRegionsInput } from './locations-create-without-regions.input';
import { Type } from 'class-transformer';
import { locationsCreateOrConnectWithoutRegionsInput } from './locations-create-or-connect-without-regions.input';
import { locationsWhereUniqueInput } from './locations-where-unique.input';

@InputType()
export class locationsCreateNestedManyWithoutRegionsInput {

    @Field(() => [locationsCreateWithoutRegionsInput], {nullable:true})
    @Type(() => locationsCreateWithoutRegionsInput)
    create?: Array<locationsCreateWithoutRegionsInput>;

    @Field(() => [locationsCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => locationsCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<locationsCreateOrConnectWithoutRegionsInput>;

    @Field(() => [locationsWhereUniqueInput], {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    connect?: Array<locationsWhereUniqueInput>;
}
