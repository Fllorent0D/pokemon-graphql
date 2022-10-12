import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesCreateWithoutLanguagesInput } from './stat-names-create-without-languages.input';
import { Type } from 'class-transformer';
import { stat_namesCreateOrConnectWithoutLanguagesInput } from './stat-names-create-or-connect-without-languages.input';
import { stat_namesWhereUniqueInput } from './stat-names-where-unique.input';

@InputType()
export class stat_namesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [stat_namesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_namesCreateWithoutLanguagesInput)
    create?: Array<stat_namesCreateWithoutLanguagesInput>;

    @Field(() => [stat_namesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => stat_namesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<stat_namesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_namesWhereUniqueInput)
    connect?: Array<stat_namesWhereUniqueInput>;
}
