import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_proseCreateWithoutLanguagesInput } from './ability-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { ability_proseCreateOrConnectWithoutLanguagesInput } from './ability-prose-create-or-connect-without-languages.input';
import { ability_proseWhereUniqueInput } from './ability-prose-where-unique.input';

@InputType()
export class ability_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [ability_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_proseCreateWithoutLanguagesInput)
    create?: Array<ability_proseCreateWithoutLanguagesInput>;

    @Field(() => [ability_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => ability_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<ability_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [ability_proseWhereUniqueInput], {nullable:true})
    @Type(() => ability_proseWhereUniqueInput)
    connect?: Array<ability_proseWhereUniqueInput>;
}
