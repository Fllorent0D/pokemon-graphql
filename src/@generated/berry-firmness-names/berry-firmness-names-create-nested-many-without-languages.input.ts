import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesCreateWithoutLanguagesInput } from './berry-firmness-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesCreateOrConnectWithoutLanguagesInput } from './berry-firmness-names-create-or-connect-without-languages.input';
import { berry_firmness_namesWhereUniqueInput } from './berry-firmness-names-where-unique.input';

@InputType()
export class berry_firmness_namesCreateNestedManyWithoutLanguagesInput {

    @Field(() => [berry_firmness_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => berry_firmness_namesCreateWithoutLanguagesInput)
    create?: Array<berry_firmness_namesCreateWithoutLanguagesInput>;

    @Field(() => [berry_firmness_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => berry_firmness_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<berry_firmness_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [berry_firmness_namesWhereUniqueInput], {nullable:true})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    connect?: Array<berry_firmness_namesWhereUniqueInput>;
}
