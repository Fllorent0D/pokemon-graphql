import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesCreateWithoutLanguagesInput } from './nature-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { nature_namesCreateOrConnectWithoutLanguagesInput } from './nature-names-create-or-connect-without-languages.input';
import { nature_namesWhereUniqueInput } from './nature-names-where-unique.input';

@InputType()
export class nature_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [nature_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => nature_namesCreateWithoutLanguagesInput)
    create?: Array<nature_namesCreateWithoutLanguagesInput>;

    @Field(() => [nature_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => nature_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<nature_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [nature_namesWhereUniqueInput], {nullable:true})
    @Type(() => nature_namesWhereUniqueInput)
    connect?: Array<nature_namesWhereUniqueInput>;
}
