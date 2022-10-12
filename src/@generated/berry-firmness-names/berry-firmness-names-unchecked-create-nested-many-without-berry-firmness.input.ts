import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesCreateWithoutBerry_firmnessInput } from './berry-firmness-names-create-without-berry-firmness.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesCreateOrConnectWithoutBerry_firmnessInput } from './berry-firmness-names-create-or-connect-without-berry-firmness.input';
import { berry_firmness_namesWhereUniqueInput } from './berry-firmness-names-where-unique.input';

@InputType()
export class berry_firmness_namesUncheckedCreateNestedManyWithoutBerry_firmnessInput {

    @Field(() => [berry_firmness_namesCreateWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berry_firmness_namesCreateWithoutBerry_firmnessInput)
    create?: Array<berry_firmness_namesCreateWithoutBerry_firmnessInput>;

    @Field(() => [berry_firmness_namesCreateOrConnectWithoutBerry_firmnessInput], {nullable:true})
    @Type(() => berry_firmness_namesCreateOrConnectWithoutBerry_firmnessInput)
    connectOrCreate?: Array<berry_firmness_namesCreateOrConnectWithoutBerry_firmnessInput>;

    @Field(() => [berry_firmness_namesWhereUniqueInput], {nullable:true})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    connect?: Array<berry_firmness_namesWhereUniqueInput>;
}
