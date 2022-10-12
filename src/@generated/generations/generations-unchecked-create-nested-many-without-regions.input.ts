import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutRegionsInput } from './generations-create-without-regions.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutRegionsInput } from './generations-create-or-connect-without-regions.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class generationsUncheckedCreateNestedManyWithoutRegionsInput {

    @Field(() => [generationsCreateWithoutRegionsInput], {nullable:true})
    @Type(() => generationsCreateWithoutRegionsInput)
    create?: Array<generationsCreateWithoutRegionsInput>;

    @Field(() => [generationsCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<generationsCreateOrConnectWithoutRegionsInput>;

    @Field(() => [generationsWhereUniqueInput], {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: Array<generationsWhereUniqueInput>;
}
