import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_group_proseEgg_group_idLocal_language_idCompoundUniqueInput } from './egg-group-prose-egg-group-id-local-language-id-compound-unique.input';

@InputType()
export class egg_group_proseWhereUniqueInput {

    @Field(() => egg_group_proseEgg_group_idLocal_language_idCompoundUniqueInput, {nullable:true})
    egg_group_id_local_language_id?: egg_group_proseEgg_group_idLocal_language_idCompoundUniqueInput;
}
