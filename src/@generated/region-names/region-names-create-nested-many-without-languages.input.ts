import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { region_namesCreateWithoutLanguagesInput } from './region-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { region_namesCreateOrConnectWithoutLanguagesInput } from './region-names-create-or-connect-without-languages.input';
import { region_namesWhereUniqueInput } from './region-names-where-unique.input';

@InputType()
export class region_namesCreateNestedManyWithoutLanguagesInput {

    @Field(() => [region_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => region_namesCreateWithoutLanguagesInput)
    create?: Array<region_namesCreateWithoutLanguagesInput>;

    @Field(() => [region_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => region_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<region_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [region_namesWhereUniqueInput], {nullable:true})
    @Type(() => region_namesWhereUniqueInput)
    connect?: Array<region_namesWhereUniqueInput>;
}
