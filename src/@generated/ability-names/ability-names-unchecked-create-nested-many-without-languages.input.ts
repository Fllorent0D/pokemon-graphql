import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesCreateWithoutLanguagesInput } from './ability-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { ability_namesCreateOrConnectWithoutLanguagesInput } from './ability-names-create-or-connect-without-languages.input';
import { ability_namesWhereUniqueInput } from './ability-names-where-unique.input';

@InputType()
export class ability_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [ability_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_namesCreateWithoutLanguagesInput)
    create?: Array<ability_namesCreateWithoutLanguagesInput>;

    @Field(() => [ability_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<ability_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [ability_namesWhereUniqueInput], {nullable:true})
    @Type(() => ability_namesWhereUniqueInput)
    connect?: Array<ability_namesWhereUniqueInput>;
}
