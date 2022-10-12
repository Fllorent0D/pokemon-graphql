import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesCreateWithoutGenerationsInput } from './generation-names-create-without-generations.input';
import { Type } from 'class-transformer';
import { generation_namesCreateOrConnectWithoutGenerationsInput } from './generation-names-create-or-connect-without-generations.input';
import { generation_namesWhereUniqueInput } from './generation-names-where-unique.input';

@InputType()
export class generation_namesUncheckedCreateNestedManyWithoutGenerationsInput {

    @Field(() => [generation_namesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => generation_namesCreateWithoutGenerationsInput)
    create?: Array<generation_namesCreateWithoutGenerationsInput>;

    @Field(() => [generation_namesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => generation_namesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<generation_namesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [generation_namesWhereUniqueInput], {nullable:true})
    @Type(() => generation_namesWhereUniqueInput)
    connect?: Array<generation_namesWhereUniqueInput>;
}
