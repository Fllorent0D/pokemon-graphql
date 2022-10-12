import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesCreateWithoutLanguagesInput } from './generation-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { generation_namesCreateOrConnectWithoutLanguagesInput } from './generation-names-create-or-connect-without-languages.input';
import { generation_namesWhereUniqueInput } from './generation-names-where-unique.input';

@InputType()
export class generation_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [generation_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => generation_namesCreateWithoutLanguagesInput)
    create?: Array<generation_namesCreateWithoutLanguagesInput>;

    @Field(() => [generation_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => generation_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<generation_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [generation_namesWhereUniqueInput], {nullable:true})
    @Type(() => generation_namesWhereUniqueInput)
    connect?: Array<generation_namesWhereUniqueInput>;
}
